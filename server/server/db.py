import os

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

__all__ = ["fish_collection"]

client = MongoClient(
    host=os.environ.get("MONGODB_URL"), port=int(os.environ.get("MONGODB_PORT"))
)
db = client["fish_app"]
fish_collection = db["fish"]
