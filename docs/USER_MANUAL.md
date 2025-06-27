# Whisperly User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Main Interface](#main-interface)
4. [Audio Processing](#audio-processing)
5. [Settings & Configuration](#settings--configuration)
6. [Export Options](#export-options)
7. [Troubleshooting](#troubleshooting)
8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Advanced Features](#advanced-features)

## Introduction

### What is Whisperly?
Whisperly is a fully local, cross-platform desktop application that converts audio files to text using advanced AI technology. Unlike cloud-based solutions, Whisperly processes all audio locally on your computer, ensuring complete privacy and data security.

### Key Features
- **Privacy First**: All processing happens locally - your audio never leaves your computer
- **Multi-format Support**: Works with MP3, WAV, FLAC, M4A, AAC, OGG, and WMA files
- **High Quality**: Powered by OpenAI's Whisper model for accurate transcription
- **Cross-platform**: Available for Windows, macOS, and Linux
- **One-time Purchase**: $39 lifetime license with no subscription fees
- **Offline Operation**: No internet connection required after initial setup

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: 2GB free space for models and application
- **Processor**: Modern multi-core CPU (GPU acceleration optional)

## Getting Started

### Installation
1. Download Whisperly from the official website
2. Run the installer and follow the setup wizard
3. Launch Whisperly from your applications menu

### First Launch
On first launch, Whisperly will:
1. Download the required AI model (approximately 1GB)
2. Initialize the transcription engine
3. Present the main interface

**Note**: The initial model download requires an internet connection. Subsequent use is completely offline.

## Main Interface

### Welcome Screen
When you first open Whisperly, you'll see a clean welcome screen with:
- **Large Audio Icon**: Visual indicator of the application's purpose
- **"Audio Transcription" Title**: Clear application identification
- **"Select Audio File" Button**: Primary action to begin transcription
- **Drag & Drop Area**: You can also drag audio files directly onto the window

### Workspace Layout
Once you've selected an audio file, the interface switches to a two-column workspace:

#### Left Column - Control Panel
- **File Information Card**: Shows selected file details
- **Progress Card**: Displays real-time transcription progress
- **Export Card**: Available after transcription completion

#### Right Column - Results
- **Transcription Results**: Shows the transcribed text with statistics
- **Text Editor**: Editable transcription with character and segment counts

### Status Indicators
- **♪ Local Processing**: Indicates the application is running locally
- **Ready**: Engine is loaded and ready for transcription
- **Processing**: Currently transcribing audio
- **Loading**: Initializing or loading models

## Audio Processing

### Supported Formats
Whisperly supports the following audio formats:
- **MP3**: Most common compressed format
- **WAV**: Uncompressed audio (high quality, larger files)
- **FLAC**: Lossless compression
- **M4A**: Apple's audio format
- **AAC**: Advanced audio coding
- **OGG**: Open source format
- **WMA**: Windows Media Audio

### Processing Steps
1. **File Selection**: Choose your audio file through the file dialog or drag & drop
2. **Format Detection**: Whisperly automatically detects the audio format
3. **Audio Analysis**: The system analyzes audio quality and characteristics
4. **Preprocessing**: Converts to optimal format for transcription (16kHz mono)
5. **Transcription**: AI model processes the audio and generates text
6. **Post-processing**: Applies punctuation, timestamps, and formatting

### Processing Options
- **Language Detection**: Automatically detects the spoken language
- **Quality Settings**: Choose between speed and accuracy
- **Device Selection**: Use CPU or GPU acceleration (if available)

## Settings & Configuration

### Accessing Settings
Click the "Settings" button in the top menu bar to open the settings panel.

### Whisper Model Settings

#### Model Selection
Choose from five different model sizes:
- **Tiny**: Fastest processing, basic accuracy
- **Base**: Balanced speed and quality (recommended)
- **Small**: Better quality, moderate speed
- **Medium**: High quality, slower processing
- **Large**: Best quality, slowest processing

#### Compute Device
- **Auto Select**: Automatically chooses the best available device
- **CPU**: Uses your computer's processor (most compatible)
- **NVIDIA GPU**: Uses CUDA acceleration (requires compatible GPU)
- **Apple Metal**: Uses Apple's Metal framework (Mac only)

### Output Settings

#### Default Format
Choose your preferred export format:
- **Plain Text (.txt)**: Simple text file
- **SRT Subtitle (.srt)**: Subtitle format with timestamps
- **JSON Format (.json)**: Structured data with metadata
- **CSV Format (.csv)**: Spreadsheet-compatible format

#### Output Directory
Set the default folder where transcribed files will be saved.

### Saving Settings
Click "Save Settings" to apply your changes. Some settings may require restarting the application.

## Export Options

### Available Formats

#### Plain Text (.txt)
Simple text file containing only the transcribed content.

#### SRT Subtitle (.srt)
Standard subtitle format with timestamps:
```
1
00:00:00,000 --> 00:00:03,500
Hello, this is the first segment of audio.

2
00:00:03,500 --> 00:00:07,200
This is the second segment with timing information.
```

#### JSON Format (.json)
Structured data including:
- Full transcription text
- Individual segments with timestamps
- Confidence scores
- Audio metadata

#### CSV Format (.csv)
Spreadsheet-compatible format with columns for:
- Start time
- End time
- Text content
- Confidence score

### Export Process
1. Complete transcription
2. Click "Export" in the results panel
3. Choose your desired format
4. Select save location
5. File is created with your transcription

### Copy to Clipboard
Use the "Copy" button to quickly copy the transcription text to your system clipboard.

## Troubleshooting

### Common Issues

#### "Model Not Found" Error
- Ensure you have an internet connection for the first launch
- Check that you have sufficient disk space (2GB minimum)
- Try restarting the application

#### Slow Processing
- Close other applications to free up memory
- Try using a smaller model (Tiny or Base)
- Ensure you're using the recommended device setting

#### Audio File Not Supported
- Verify the file format is supported
- Try converting the file to MP3 or WAV format
- Check that the file isn't corrupted

#### Application Crashes
- Update to the latest version
- Check system requirements
- Try running with CPU-only mode

### Performance Optimization
- **Use GPU acceleration** if available
- **Close unnecessary applications** during processing
- **Use appropriate model size** for your needs
- **Ensure adequate cooling** for your computer

### Getting Help
- Check the application logs for detailed error information
- Visit the official website for additional support
- Contact support with specific error messages

## Keyboard Shortcuts

### General Navigation
- **Ctrl+O**: Open audio file
- **Ctrl+S**: Save settings
- **Ctrl+Q**: Quit application
- **F1**: Open help/documentation

### During Transcription
- **Escape**: Cancel current transcription
- **Ctrl+C**: Copy transcription to clipboard
- **Ctrl+E**: Export transcription

### Settings Panel
- **Ctrl+,**: Open settings panel
- **Enter**: Save settings
- **Escape**: Close settings panel

## Advanced Features

### Batch Processing
For processing multiple files:
1. Select multiple audio files
2. Process them sequentially
3. Export all results at once

### Audio Analysis
Whisperly provides detailed audio analysis including:
- **RMS (Root Mean Square)**: Audio volume levels
- **Zero-crossing Rate**: Audio frequency characteristics
- **Spectral Centroid**: Brightness of the audio
- **SNR (Signal-to-Noise Ratio)**: Audio quality measurement

### Multi-language Support
- Automatic language detection for 99+ languages
- Manual language selection available
- Support for mixed-language content

### Quality Metrics
The application provides confidence scores for each transcription segment, helping you identify areas that may need review.

### Custom Dictionaries
Add custom terminology to improve transcription accuracy for specialized content (medical, technical, etc.).

---

## Support and Updates

### Version Information
Current version information is displayed in the application settings.

### Updates
Whisperly will automatically check for updates when connected to the internet. Updates are free for all licensed users.

### License Information
Your license key and activation status can be found in the settings panel.

---

*For additional support, visit the official Whisperly website or contact our support team.* 