from typing import Optional

from bson import ObjectId
from pydantic import BaseModel, Field

from server.api.common import PyObjectId


class FishFields:
    fish_id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    common_name: str = Field()
    scientific_name: str = Field()
    max_length_inches: int = Field()


class DeleteFishModel(BaseModel):
    pass
    # fish_id: int = FishSchema.fish_id


class FishModel(BaseModel):
    fish_id: PyObjectId = FishFields.fish_id
    common_name: str = FishFields.common_name
    scientific_name: str = FishFields.scientific_name
    max_length_inches: int = FishFields.max_length_inches

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ReadFishModel(FishModel):
    pass


class CreateFishModel(ReadFishModel):
    pass


class UpdateFishModel(ReadFishModel):
    common_name: Optional[str] = FishFields.common_name
    scientific_name: Optional[str] = FishFields.scientific_name
    max_length_inches: Optional[int] = FishFields.max_length_inches
