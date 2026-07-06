"""
==========================================================
CustomerPulse AI
Metadata Manager
==========================================================
"""

import json

from pathlib import Path

from datetime import datetime


class MetadataManager:

    """
    Handles workspace metadata.

    Responsible for:

    • metadata.json creation

    • metadata updates

    • reading metadata
    """

    # -------------------------------------------------- #
    # Create Metadata
    # -------------------------------------------------- #

    def create_metadata(

        self,

        workspace_path: Path,

        project_id: str,

        filename: str

    ):

        metadata = {

            "project_id": project_id,

            "company_name": None,

            "filename": filename,

            "file_type": Path(filename).suffix.replace(".", ""),

            "uploaded_at": datetime.now().isoformat(),

            "status": "uploaded",

            "dataset_quality": None,

            "rows": None,

            "columns": None,

            "prediction_completed": False,

            "dashboard_generated": False

        }

        metadata_path = workspace_path / "metadata.json"

        with open(

            metadata_path,

            "w",

            encoding="utf-8"

        ) as file:

            json.dump(

                metadata,

                file,

                indent=4

            )

        return metadata_path

    # -------------------------------------------------- #
    # Read Metadata
    # -------------------------------------------------- #

    def read_metadata(

        self,

        workspace_path: Path

    ):

        metadata_path = workspace_path / "metadata.json"

        with open(

            metadata_path,

            "r",

            encoding="utf-8"

        ) as file:

            return json.load(file)

    # -------------------------------------------------- #
    # Update Metadata
    # -------------------------------------------------- #

    def update_metadata(

        self,

        workspace_path: Path,

        updates: dict

    ):

        metadata = self.read_metadata(

            workspace_path

        )

        metadata.update(updates)

        metadata_path = workspace_path / "metadata.json"

        with open(

            metadata_path,

            "w",

            encoding="utf-8"

        ) as file:

            json.dump(

                metadata,

                file,

                indent=4

            )

        return metadata