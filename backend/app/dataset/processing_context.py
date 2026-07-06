"""
==========================================================
CustomerPulse AI
Processing Context
==========================================================
"""


class ProcessingContext:

    def __init__(

        self,

        project_id: str,

        workspace_path: str,

        dataset_path: str

    ):

        self.project_id = project_id

        self.workspace_path = workspace_path

        self.dataset_path = dataset_path

        # -----------------------------
        # Data
        # -----------------------------

        self.raw_dataframe = None

        self.standardized_dataframe = None

        self.prediction_dataframe = None

        # -----------------------------
        # Validation
        # -----------------------------

        self.validation = {}

        self.mapping = {}

        self.missing_features = []

        # -----------------------------
        # Business Intelligence
        # -----------------------------

        self.health = {}

        self.revenue = {}

        self.risk = {}

        self.segmentation = {}

        self.recommendations = {}

        self.executive_summary = {}

        self.decision_center = {}

        # -----------------------------
        # Dashboard
        # -----------------------------

        self.dashboard = {}

        # -----------------------------
        # Metadata
        # -----------------------------

        self.metadata = {}

        self.success = False