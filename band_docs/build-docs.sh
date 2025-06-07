#!/bin/bash
cd "$(dirname "$0")"
pip install -q mkdocs-material
mkdocs build
echo "Build complete. Static site available in ./site directory"
