#!/bin/bash
source "venv/bin/activate"
uvicorn server.main:app --reload --port 8000