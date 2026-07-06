from fastapi import APIRouter
from fastapi import HTTPException

from app.dataset.workspace_lookup import WorkspaceLookup
from app.dataset.dashboard_storage import DashboardStorage

router = APIRouter(

    prefix="/dashboard",

    tags=["Dashboard"]

)


@router.get("/{project_id}")

def get_dashboard(project_id: str):

    workspace = WorkspaceLookup.get_workspace(

        project_id

    )

    if workspace is None:

        raise HTTPException(

            status_code=404,

            detail="Project not found."

        )

    dashboard = DashboardStorage.load_dashboard(

        workspace

    )

    if dashboard is None:

        raise HTTPException(

            status_code=404,

            detail="Dashboard not generated."

        )

    return dashboard