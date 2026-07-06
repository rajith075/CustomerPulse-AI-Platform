from pathlib import Path


class WorkspaceLookup:

    ROOT = (
        Path(__file__)
        .resolve()
        .parents[2]
        / "workspaces"
    )

    @classmethod
    def get_workspace(cls, project_id):

        workspace = cls.ROOT / project_id

        if workspace.exists():

            return workspace

        return None