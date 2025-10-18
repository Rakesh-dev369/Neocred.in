#!/usr/bin/env python3
"""DevOps Setup Script"""
import subprocess
import sys
import os

def install_pre_commit():
    """Install and setup pre-commit hooks"""
    print("🔧 Setting up pre-commit hooks...")
    
    try:
        # Install pre-commit
        subprocess.run([sys.executable, "-m", "pip", "install", "pre-commit"], check=True)
        
        # Install hooks
        subprocess.run(["pre-commit", "install"], check=True)
        
        # Run initial check
        subprocess.run(["pre-commit", "run", "--all-files"], check=False)
        
        print("✅ Pre-commit hooks installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to setup pre-commit: {e}")
        return False
    except FileNotFoundError:
        print("❌ pre-commit command not found. Install pre-commit first.")
        return False

def setup_git_hooks():
    """Setup additional git hooks"""
    print("🔧 Setting up additional git hooks...")
    
    # Create commit-msg hook for conventional commits
    commit_msg_hook = """#!/bin/sh
# Conventional commit format check
commit_regex='^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\\(.+\\))?: .{1,50}'

if ! grep -qE "$commit_regex" "$1"; then
    echo "❌ Invalid commit message format!"
    echo "Use: type(scope): description"
    echo "Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert"
    exit 1
fi
"""
    
    hooks_dir = ".git/hooks"
    if os.path.exists(hooks_dir):
        with open(f"{hooks_dir}/commit-msg", "w") as f:
            f.write(commit_msg_hook)
        os.chmod(f"{hooks_dir}/commit-msg", 0o755)
        print("✅ Git commit-msg hook installed")
        return True
    else:
        print("⚠️ Not in a git repository, skipping git hooks")
        return False

def create_github_templates():
    """Create GitHub issue and PR templates"""
    print("🔧 Creating GitHub templates...")
    
    # Create .github directory if it doesn't exist
    github_dir = ".github"
    templates_dir = f"{github_dir}/ISSUE_TEMPLATE"
    
    os.makedirs(templates_dir, exist_ok=True)
    
    # Bug report template
    bug_template = """---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Environment:**
- OS: [e.g. Ubuntu 20.04]
- Python version: [e.g. 3.11]
- NeoCred version: [e.g. 2.0.0]

**Additional context**
Add any other context about the problem here.
"""
    
    # Security issue template
    security_template = """---
name: Security Issue
about: Report a security vulnerability
title: '[SECURITY] '
labels: security, high-priority
assignees: 'Rakesh-dev369'
---

**⚠️ SECURITY ISSUE ⚠️**

**Please do not create a public issue for security vulnerabilities.**
Instead, email: security@neocred.in

**If this is not a security issue, please delete this template and use the bug report template.**
"""
    
    # Pull request template
    pr_template = """## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Security checks pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No sensitive data exposed
"""
    
    # Write templates
    with open(f"{templates_dir}/bug_report.md", "w") as f:
        f.write(bug_template)
    
    with open(f"{templates_dir}/security_issue.md", "w") as f:
        f.write(security_template)
    
    with open(f"{github_dir}/pull_request_template.md", "w") as f:
        f.write(pr_template)
    
    print("✅ GitHub templates created")
    return True

def main():
    """Setup DevOps environment"""
    print("🚀 Setting up NeoCred DevOps Environment\n")
    
    setup_tasks = [
        ("Pre-commit Hooks", install_pre_commit),
        ("Git Hooks", setup_git_hooks),
        ("GitHub Templates", create_github_templates)
    ]
    
    results = []
    for name, task_func in setup_tasks:
        try:
            success = task_func()
            results.append((name, success))
        except Exception as e:
            print(f"❌ {name} failed: {e}")
            results.append((name, False))
    
    # Summary
    print("\n📊 DevOps Setup Summary:")
    all_passed = True
    for name, success in results:
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"  {status} - {name}")
        if not success:
            all_passed = False
    
    if all_passed:
        print("\n🎉 DevOps environment setup complete!")
        print("\nNext steps:")
        print("1. Commit your changes")
        print("2. Push to GitHub to trigger CI/CD")
        print("3. Check GitHub Actions for pipeline status")
    else:
        print("\n⚠️ Some setup tasks failed. Check the output above.")

if __name__ == "__main__":
    main()