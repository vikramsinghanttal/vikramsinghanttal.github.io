---
title: 'AI for 5G/6G Air Interface'
summary: "Led AI/ML model development & 5G-Advanced simulations for feasibility study on Beam Prediction, CSI Compression, & Positioning, with contributions to 3GPP Release 18/19 standardization."
period: '2020–Present'
role: 'Lead Research'
tech:
  - 'CSI feedback'
  - 'Positioning'
  - 'Model Design'
  - 'Beam-management'
  - 'Standardization'
featured: false
order: 2
---

3GPP's Release 18/19 AI/ML air-interface study items set out to find where a
trained model actually beats classical signal processing once training-data
collection, generalization across deployments, and model-monitoring overhead
are accounted for. Beam prediction, CSI compression, and positioning surfaced
as the three use cases with the clearest gains.

I lead the AI/ML model development and 5G-Advanced system-level simulations
behind this work: spatial and mobility-aware beam prediction using CNN and
Transformer architectures, deep-learning CSI feedback frameworks that skip
full channel reconstruction, and the AI/ML positioning models covered under
[Positioning in Cellular Networks](/projects/cellular-positioning/). What
began as pre-standardization feasibility studies at CEWiT, IIT Madras continues 
today at Tejas Networks, where I drive the model design, simulation platform, 
and patent portfolio that feed 3GPP Release 18/19 standardization.

## Selected publications

- **[PosNet: A CNN-based Transformer Model for UE Localization in NLOS Dominated Scenarios](/publications/aditya-posnet-2026/)** — IEEE Communications Letters (submitted 2026). Transformer-backed CNN that attends to the most informative CIR taps, reaching 5.4 cm accuracy for 90% of UEs in NLOS-dominated channels.
- **[SwitchConvNet: Deep Learning Framework for Mobility-Aware Spatial Beam Prediction in Beyond 5G and 6G Systems](/publications/adarsh-switchconvnet-vtc-2026/)** — IEEE Transactions on Vehicular Technology (accepted 2026). Mobility-aware spatial beam prediction with an adaptive spline/Gaussian switching filter, cutting beam-acquisition time by over 80% with 77% top-1 and 97% top-3 accuracy.
- **[A Hybrid CNN-Transformer Framework for Precise Indoor Positioning in 6G Networks](/publications/shubham-positioning-meditcom-2026/)** — IEEE MeditCom 2026. Hybrid CNN-Transformer architecture pairing local feature extraction with long-range attention for robust indoor positioning under severe NLoS.
- **[SuperConvNet: Super Resolution Orchestrated Deep Convolutional Neural Network for Spatial Beam Prediction in B5G and 6G Systems](/publications/adarsh-superconvnet-vtc-2026/)** — IEEE Transactions on Machine Learning in Communications and Networking (submitted 2026). Super-resolution CNN for spatial beam prediction that cuts beam-acquisition latency by over 80% while improving throughput, with 84% top-1 and near-100% top-3 accuracy.
- **[PrecoderNet: A Feedback Framework for Massive MIMO-OFDM Systems](/publications/rahul-precodernet-comsnets-2026/)** — IEEE COMSNETS 2026. Deep-learning encoder/decoder that estimates the SVD-based precoding matrix directly, cutting CSI feedback overhead without full channel reconstruction.
- **[AI-ML Models for Wireless Positioning Using Channel Information](/publications/vikram-ai_ml_positioning_models-2025/)** — Indian Patent Application 202541112619 (2025). AI/ML models that extract location-sensitive features directly from channel information to estimate device position.
- **[Performance evaluation of AI-based CSI feedback schemes compliant with 3GPP standards](/publications/rahul-ai_csi-phycom-2025/)** — Physical Communication (2025). M-CsiNet, an AI-based CSI compression and reconstruction model benchmarked against 3GPP Type-II codebooks, delivering 10-15 dB SNR gain with two orders of magnitude less feedback overhead.
- **[AI/ML-Based Downlink Beam Prediction for Enhanced 5G-Advanced and 6G Networks](/publications/vikram-ai_ml_beammanagement_model-2025/)** — Indian Patent Application 202541083874 (2025). AI/ML techniques that predict suitable downlink beams to cut the measurement and signaling cost of beam selection and tracking.
- **[Efficient Data Collection and Model Architecture for AI-ML-Based Positioning](/publications/vikram-data_collection-2025/)** — Indian Patent Application 202541009543 (2025). Data-collection and model-architecture techniques that streamline training and operation of AI-ML positioning models.
- **[Low Overhead AI-ML based Positioning Enhancements](/publications/vikram-low_overhead_positioning_aiml-2024/)** — Indian Patent Application 202441085443 (2024). AI/ML-assisted positioning that cuts the signaling, measurement, and data-collection overhead of positioning operations.
- **[AI-ML based Positioning Enhancements](/publications/vikram-positioning-aiml-2024/)** — Indian Patent Application 202441074530 (2024). AI/ML mechanisms that enhance positioning procedures using information already available within the wireless network.