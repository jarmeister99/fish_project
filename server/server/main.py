from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn  # type: ignore

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/fish")
async def get_fish():
    return [
    ]


@app.get("/fish/{fish_id}")
async def get_fish(fish_id: int):
    return {"fish_id": fish_id}


def start():
    uvicorn.run("server.main:app", host="0.0.0.0", port=8000, reload=True)


if __name__ == "__main__":
    start()
