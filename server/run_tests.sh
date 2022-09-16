#!/bin/bash

source .venv/bin/activate
black server --preview;
flake8 server;
mypy server;
echo "All done!";
deactivate