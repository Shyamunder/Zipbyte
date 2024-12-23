import os
import subprocess
import sys

try:
    import pyqrcode
    import png
except ImportError:
    print("Required modules are not installed. Installing them now...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pyqrcode", "pypng"])

import pyqrcode
import png
from pyqrcode import QRCode

s = input("Enter the URL for which you want to generate the QR code: ")
url = pyqrcode.create(s)

png_file = "myqr.png"
url.png(png_file, scale=6)
print(f"PNG file saved as {png_file}")