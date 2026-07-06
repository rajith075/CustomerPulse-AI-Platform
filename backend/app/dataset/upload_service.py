from app.dataset.workspace_manager import WorkspaceManager
from app.dataset.metadata_manager import MetadataManager
from app.dataset.dataset_pipeline import DatasetPipeline

from app.dataset.prediction_storage import PredictionStorage
from app.dataset.dashboard_storage import DashboardStorage

from app.services.dashboard_service import DashboardService
from app.customer.customer_storage import CustomerStorage

class UploadService:

    def __init__(self):

        self.workspace = WorkspaceManager()

        self.metadata = MetadataManager()

        self.pipeline = DatasetPipeline()

    def upload_dataset(self, uploaded_file):

        # ======================================================
        # Create Workspace
        # ======================================================

        project_id, workspace_path = (

            self.workspace.create_workspace()

        )

        # ======================================================
        # Save Uploaded Dataset
        # ======================================================

        dataset_path = self.workspace.save_dataset(

            uploaded_file,

            workspace_path

        )

        # ======================================================
        # Create Metadata
        # ======================================================

        self.metadata.create_metadata(

            workspace_path,

            project_id,

            uploaded_file.filename

        )

        # ======================================================
        # Run Complete AI Pipeline
        # ======================================================

        result = self.pipeline.process(

            dataset_path

        )
        if result["success"]:
            CustomerStorage.save_customers(
                 workspace_path,
                  result["prediction_dataframe"]

            )
        # ======================================================
        # Success
        # ======================================================

        if result["success"]:

            validation = result["validation"]

            # ------------------------------------------
            # Save Prediction CSV
            # ------------------------------------------

            PredictionStorage.save(

                result["prediction_dataframe"],

                workspace_path

            )

            print("✅ Prediction CSV Saved")

            # ------------------------------------------
            # Generate Dashboard
            # ------------------------------------------

            dashboard = DashboardService.calculate_dashboard(

                result["prediction_dataframe"]

            )

            print("✅ Dashboard Generated")

            # ------------------------------------------
            # Save Dashboard JSON
            # ------------------------------------------

            DashboardStorage.save_dashboard(

                workspace_path,

                dashboard

            )

            print("✅ Dashboard Saved")

            # ------------------------------------------
            # Update Metadata
            # ------------------------------------------

            self.metadata.update_metadata(

                workspace_path,

                {

                    "status": validation["status"],

                    "rows": validation["rows"],

                    "columns": validation["columns"],

                    "dataset_quality": validation["quality_score"],

                    "prediction_completed": True,

                    "dashboard_generated": True

                }

            )

            return {

                "success": True,

                "project_id": project_id,

                "filename": uploaded_file.filename,

                "message": "Dataset processed successfully."

            }

        # ======================================================
        # Failed
        # ======================================================

        self.metadata.update_metadata(

            workspace_path,

            {

                "status": "FAILED",

                "prediction_completed": False,

                "dashboard_generated": False,

                "missing_features": result.get(

                    "missing_features",

                    []

                )

            }

        )

        return {

            "success": False,

            "project_id": project_id,

            "filename": uploaded_file.filename,

            "message": "Dataset processing failed.",

            "missing_features": result.get(

                "missing_features",

                []

            )

        }