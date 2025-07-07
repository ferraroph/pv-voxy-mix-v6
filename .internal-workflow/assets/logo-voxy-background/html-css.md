Logo Voxy Mix

html:

[
                            <div class="logo-placeholder">
                                <img src="media\images\logo-voxy-mix-transparente.png" alt="Voxy Mix Logo">
                            </div>
]

CSS:

[
        .step-1 .logo-section {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInUp 150ms ease-out 0.2s both;
        }

        .step-1 .logo-placeholder {
            width: 120px;
            height: 120px;
            margin: 0 auto 1.5rem;
            background:
                radial-gradient(circle at 30% 30%, rgba(0, 162, 255, 0.3), rgba(0, 132, 255, 0.1)),
                linear-gradient(145deg, var(--bg-card), var(--bg-secondary));
            border: 2px solid rgba(0, 162, 255, 0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 0 0 20px rgba(0, 162, 255, 0.5);
            overflow: hidden;
        }

        .step-1 .logo-placeholder img {
            width: 80%;
            height: 80%;
            object-fit: contain;
            filter: drop-shadow(0 0 10px rgba(0, 162, 255, 0.5));
        }
]