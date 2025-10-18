#!/usr/bin/env python3
"""Code Formatting Script"""
import subprocess
import sys

def run_formatter():
    """Run Black code formatter"""
    print("🎨 Formatting code with Black...")
    result = subprocess.run(["black", "."], capture_output=True, text=True)
    
    if result.returncode == 0:
        print("✅ Code formatting completed")
        print(result.stdout)
    else:
        print("❌ Code formatting failed")
        print(result.stderr)
        sys.exit(1)

def run_import_sort():
    """Sort imports (if isort is available)"""
    try:
        print("📦 Sorting imports...")
        result = subprocess.run(["isort", "."], capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ Import sorting completed")
        else:
            print("⚠️ Import sorting skipped (isort not available)")
    except FileNotFoundError:
        print("⚠️ Import sorting skipped (isort not installed)")

if __name__ == "__main__":
    run_formatter()
    run_import_sort()
    print("🎉 Code formatting complete!")