# Install C++ Build Tools for Python Packages

## Steps to Install Build Tools

### 1. Open Visual Studio Installer
- Launch Visual Studio Installer from Start Menu

### 2. Install C++ Build Tools
- Click "Install" or "Modify" 
- Select **"C++ build tools"** workload
- Make sure these are checked:
  - ✅ **MSVC v143 - VS 2022 C++ x64/x86 build tools**
  - ✅ **Windows 11 SDK** (latest version)
  - ✅ **CMake tools for Visual Studio**

### 3. Install and Restart
- Click "Install" 
- Restart your computer after installation

### 4. Install Python Packages
After restart, try installing the full requirements:

```bash
# Try installing full requirements now
pip install -r requirements-full.txt

# Or install packages one by one
pip install psycopg2-binary
pip install scikit-learn
pip install pandas
pip install numpy
```

### 5. Alternative: Use Pre-compiled Wheels
If build tools don't work, try installing from wheel files:

```bash
# Install from wheel repository
pip install --only-binary=all psycopg2-binary
pip install --only-binary=all scikit-learn
pip install --only-binary=all pandas
```

## Quick Test
After installing build tools, test with:
```bash
pip install psycopg2-binary
```

If this works without errors, you can proceed with the full installation.