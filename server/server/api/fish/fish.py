from typing import List

from server.api.fish.models import ReadFishModel
from server.db import fish_collection


class FishAPI:
    @staticmethod
    def list() -> List[ReadFishModel]:
        cursor = fish_collection.find()
        return [ReadFishModel(**document) for document in cursor]
