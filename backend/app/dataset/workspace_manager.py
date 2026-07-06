"""
==========================================================
CustomerPulse AI
Enterprise Workspace Manager
==========================================================
"""

from pathlib import Path
from uuid import uuid4
from datetime import datetime
import shutil


class WorkspaceManager:
    """
    Handles enterprise dataset workspaces.

    Responsibilities
    ----------------
    • Generate unique Project IDs
    • Create workspace folders
    • Save uploaded datasets
    • Return workspace information
    """

    def __init__(self):

        self.workspace_root = (
            Path(__file__)
            .resolve()
            .parents[2]
            / "workspaces"
        )

        self.workspace_root.mkdir(
            parents=True,
            exist_ok=True
        )

    # -------------------------------------------------- #
    # Generate Project ID
    # -------------------------------------------------- #

    def generate_project_id(self) -> str:

        date = datetime.now().strftime("%Y%m%d")

        random_id = uuid4().hex[:6].upper()

        return f"CP-{date}-{random_id}"

    # -------------------------------------------------- #
    # Create Workspace
    # -------------------------------------------------- #

    def create_workspace(self):

        project_id = self.generate_project_id()

        workspace_path = self.workspace_root / project_id

        workspace_path.mkdir(
            parents=True,
            exist_ok=True
        )

        return project_id, workspace_path

    # -------------------------------------------------- #
    # Save Uploaded Dataset
    # -------------------------------------------------- #

    def save_dataset(
        self,
        uploaded_file,
        workspace_path: Path
    ):

        extension = (
            Path(uploaded_file.filename)
            .suffix
            .lower()
        )

        dataset_path = (
            workspace_path /
            f"original{extension}"
        )

        with open(dataset_path, "wb") as buffer:

            shutil.copyfileobj(
                uploaded_file.file,
                buffer
            )

        return dataset_path