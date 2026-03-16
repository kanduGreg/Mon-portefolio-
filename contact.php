<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation - Gregory KANDU</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .result-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .result-card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
        }

        .data-item {
            margin: 15px 0;
            padding: 10px;
            background: #f1f5f9;
            border-radius: 8px;
        }

        .data-item label {
            font-weight: 600;
            color: #3b82f6;
            display: block;
            font-size: 0.9rem;
        }
    </style>
</head>

<body style="background: #f1f5f9;">

    <div class="result-container">
        <div class="result-card">
            <h2 class="section-title-left">Message envoyé !</h2>

            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Récupération des données du formulaire
                $nom = htmlspecialchars($_POST['nom']);
                $email = htmlspecialchars($_POST['email']);
                $message = htmlspecialchars($_POST['message']);

                echo "<div class='data-item'><label>Nom :</label> $nom</div>";
                echo "<div class='data-item'><label>Email :</label> $email</div>";
                echo "<div class='data-item'><label>Message :</label> " . nl2br($message) . "</div>";
            } else {
                echo "<p>Erreur : Le formulaire n'a pas été soumis correctement.</p>";
            }
            ?>

            <br>
            <a href="index.html" class="btn primary" style="margin: 0; width: 100%; text-align: center;">Retour au site</a>
        </div>
    </div>

</body>

</html>