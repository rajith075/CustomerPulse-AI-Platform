from pathlib import Path


class PredictionStorage:

    @staticmethod
    def save(df, workspace_path):

        path = Path(workspace_path) / "prediction.csv"

        df.to_csv(

            path,

            index=False

        )

        return str(path)