#!/bin/bash
cd "$(dirname "$0")"
pip install -q mkdocs-material
mkdocs serve
