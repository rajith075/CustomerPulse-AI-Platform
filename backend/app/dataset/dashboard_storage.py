"""
==========================================================
CustomerPulse AI
Dashboard Storage
==========================================================
"""

import json
import numpy as np

from pathlib import Path


class DashboardStorage:

    # ==========================================
    # Convert NumPy Types
    # ==========================================

    @staticmethod
    def json_converter(obj):

        if isinstance(obj, np.integer):
            return int(obj)

        if isinstance(obj, np.floating):
            return float(obj)

        if isinstance(obj, np.bool_):
            return bool(obj)

        raise TypeError(
            f"{type(obj)} is not JSON serializable"
        )

    # ==========================================
    # Save Dashboard
    # ==========================================

    @staticmethod
    def save_dashboard(workspace_path, dashboard):

        dashboard_path = (
            Path(workspace_path) / "dashboard.json"
        )

        with open(
            dashboard_path,
            "w",
            encoding="utf-8"
        ) as file:

            json.dump(

                dashboard,

                file,

                indent=4,

                ensure_ascii=False,

                default=DashboardStorage.json_converter

            )

        return str(dashboard_path)

    # ==========================================
    # Load Dashboard
    # ==========================================

    @staticmethod
    def load_dashboard(workspace_path):

        dashboard_path = (
            Path(workspace_path) / "dashboard.json"
        )

        if not dashboard_path.exists():
            return None

        with open(
            dashboard_path,
            "r",
            encoding="utf-8"
        ) as file:

            return json.load(file)