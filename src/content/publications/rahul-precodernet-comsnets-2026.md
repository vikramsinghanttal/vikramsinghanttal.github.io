---
title: 'PrecoderNet: A Feedback Framework for Massive MIMO-OFDM Systems'
authors:
  - 'Rahul Pal'
  - 'Vikram Singh'
  - 'Shikha Maurya'
venue: '18th International Conference on COMmunication Systems and NETworks (COMSNETS 2026)'
type: conference
year: 2026
date: 2026-01-10
doi: '10.1109/COMSNETS67989.2026.11418307'
abstract: 'Efficient channel state information (CSI) feedback is critical for enhancing spectral efficiency in frequency division duplex (FDD) massive MIMO systems. This paper introduces PrecoderNet, a deep learning (DL)-based framework that avoids full CSI reconstruction by directly estimating the singular value decomposition (SVD)-based precoding matrix. This framework consists of a DL-based encoder and decoder. The encoder employs multi-scale feature extraction, multi-head self-attention, and an unpatched convolution block to generate codewords. The decoder integrates a multi-head self-attention mechanism, an unpatched convolution block, and an EnhanceNet block to reconstruct the dominant right singular vectors for two transmission layers from the received codewords. This design inherently reduces feedback overhead as the number of receive antennas increases. Moreover, it mitigates scalability issues by removing the input’s dependency on the number of receive antennas. Despite its higher computational complexity, PrecoderNet achieves substantial overhead reduction and delivers significant reconstruction accuracy for different compression ratios (CRs), making it well-suited for 5G-advanced and beyond.'
bibtex: |
  @inproceedings{11418307,
    author={Pal, Rahul and Singh, Vikram and Maurya, Shikha},
    booktitle={2026 18th International Conference on COMmunication Systems and NETworks (COMSNETS)},
    title={PrecoderNet: A Feedback Framework for Massive MIMO-OFDM Systems},
    year={2026},
    pages={305-310},
    doi={10.1109/COMSNETS67989.2026.11418307}
  }

featured: true
tags:
  - Massive MIMO
  - OFDM
  - CSI Feedback
  - Deep Learning
  - Precoding
  - FDD
  - 5G Advanced
  - AI for Wireless
  - Spectral Efficiency
---