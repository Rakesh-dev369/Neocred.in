#!/usr/bin/env python3
"""Security Check Script"""
import subprocess
import sys
import json
import os

def run_bandit():
    """Run Bandit security analysis"""
    print("🔍 Running Bandit security analysis...")
    result = subprocess.run(
        ["bandit", "-r", ".", "-f", "json"],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        print("✅ No security issues found by Bandit")
        return True
    else:
        print("⚠️ Bandit found potential security issues:")
        try:
            issues = json.loads(result.stdout)
            for issue in issues.get('results', []):
                print(f"  - {issue['test_name']}: {issue['issue_text']}")
                print(f"    File: {issue['filename']}:{issue['line_number']}")
        except:
            print(result.stdout)
        return False

def run_safety():
    """Run Safety vulnerability check"""
    print("\n🔍 Running Safety vulnerability check...")
    result = subprocess.run(
        ["safety", "check", "--json"],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        print("✅ No known vulnerabilities found")
        return True
    else:
        print("⚠️ Safety found vulnerabilities:")
        try:
            vulns = json.loads(result.stdout)
            for vuln in vulns:
                print(f"  - {vuln['package']}: {vuln['vulnerability']}")
                print(f"    Installed: {vuln['installed_version']}")
                print(f"    Safe: {vuln['safe_versions']}")
        except:
            print(result.stdout)
        return False

def check_secrets():
    """Basic secrets check"""
    print("\n🔍 Checking for potential secrets...")
    
    secret_patterns = [
        'password', 'secret', 'key', 'token', 'api_key'
    ]
    
    issues_found = False
    for root, dirs, files in os.walk('.'):
        # Skip common directories
        dirs[:] = [d for d in dirs if d not in ['.git', '__pycache__', '.venv', 'venv']]
        
        for file in files:
            if file.endswith(('.py', '.env', '.yaml', '.yml', '.json')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read().lower()
                        for pattern in secret_patterns:
                            if f'{pattern}=' in content and 'your-' not in content:
                                print(f"⚠️ Potential secret in {filepath}: {pattern}")
                                issues_found = True
                except:
                    continue
    
    if not issues_found:
        print("✅ No obvious secrets found")
    
    return not issues_found

def main():
    """Run all security checks"""
    print("🚀 Running NeoCred Security Checks\n")
    
    checks = [
        ("Bandit Security Analysis", run_bandit),
        ("Safety Vulnerability Check", run_safety),
        ("Secrets Detection", check_secrets)
    ]
    
    results = []
    for name, check_func in checks:
        try:
            success = check_func()
            results.append((name, success))
        except FileNotFoundError as e:
            print(f"❌ {name} failed: Tool not installed ({e})")
            results.append((name, False))
        except Exception as e:
            print(f"❌ {name} failed: {e}")
            results.append((name, False))
    
    # Summary
    print("\n📊 Security Check Summary:")
    all_passed = True
    for name, success in results:
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"  {status} - {name}")
        if not success:
            all_passed = False
    
    if all_passed:
        print("\n🎉 All security checks passed!")
        sys.exit(0)
    else:
        print("\n🚨 Some security checks failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()