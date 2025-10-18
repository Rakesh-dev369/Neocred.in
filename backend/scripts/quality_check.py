#!/usr/bin/env python3
"""Quality Check Script"""
import subprocess
import sys
import os

def run_command(command: str, description: str) -> bool:
    """Run command and return success status"""
    print(f"\n🔍 {description}...")
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"✅ {description} passed")
        return True
    else:
        print(f"❌ {description} failed")
        print(result.stdout)
        print(result.stderr)
        return False

def main():
    """Run all quality checks"""
    print("🚀 Running NeoCred Backend Quality Checks")
    
    checks = [
        ("black --check .", "Code formatting (Black)"),
        ("flake8 .", "Code linting (Flake8)"),
        ("mypy .", "Type checking (MyPy)"),
        ("pytest --cov=. --cov-report=term-missing", "Unit tests (Pytest)")
    ]
    
    results = []
    for command, description in checks:
        success = run_command(command, description)
        results.append((description, success))
    
    # Summary
    print("\n📊 Quality Check Summary:")
    all_passed = True
    for description, success in results:
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"  {status} - {description}")
        if not success:
            all_passed = False
    
    if all_passed:
        print("\n🎉 All quality checks passed!")
        sys.exit(0)
    else:
        print("\n💥 Some quality checks failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()