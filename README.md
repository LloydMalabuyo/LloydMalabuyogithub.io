<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOYD's Portfolio</title>
    
    <link rel="icon" href="assets/images/Icon.png" type="image/png">
    
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        
        body {
            background-image: url('assets/images/background.gif');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            font-family: Arial, sans-serif;
            color: #fff;
        }

        header {
            background-color: rgba(0, 123, 255, 0.8);
            padding: 60px 0;
            position: relative;
            text-align: center;
            animation: fadeIn 2s ease-in-out; 
        }

        .header-content {
            margin-bottom: 20px;
        }

        
        .header-content h1 {
            animation: wipe 3s ease-out forwards; 
            white-space: nowrap;
            font-size: 3rem;
        }

        @keyframes wipe {
            0% {
                width: 0;
            }
            100% {
                width: 100%;
            }
        }

        
        .header-content p {
            animation: fadeInText 3s ease-out 1s forwards; 
            opacity: 0;
            font-size: 1.2rem;
        }

        @keyframes fadeInText {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

       
        .header-logo {
            margin-top: 20px;
            width: 250px;
            height: 250px;
            animation: logoFadeIn 2s ease-in-out 1s forwards; 
        }

        @keyframes logoFadeIn {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        
        .personal-info {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 40px 15px;
            border-radius: 10px;
            margin: 20px 0;
            animation: fadeIn 2s ease-in-out; 
        }

        .personal-info img {
            border-radius: 50%;
            margin-bottom: 15px;
            animation: breathe 4s infinite ease-in-out;
        }

        @keyframes breathe {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        .personal-info h2 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            opacity: 0;
            transform: scale(0.5);
            animation: popUp 2s forwards;
        }

        @keyframes popUp {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            60% {
                opacity: 1;
                transform: scale(1.1);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        .personal-info p {
            font-size: 1.2rem;
            line-height: 1.6;
            animation: fadeInText 2s ease-in-out 1s forwards; 
        }

        
        .parallax-section {
            height: 500px;
            background-image: url('assets/images/galaxy.jpg');
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .parallax-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.5) 100%);
            z-index: 1;
        }

        .parallax-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: #fff;
            animation: slideUp 2s ease-out; 
        }

        @keyframes slideUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .parallax-content h2 {
            font-size: 3.5rem;
            font-family: 'Roboto', sans-serif;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
            margin-bottom: 10px;
        }

        .parallax-content p {
            font-size: 1.5rem;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
            margin-top: 10px;
        }

       
        .activity-card {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1.5s ease-out forwards; 
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        
        footer {
            background-color: #007bff;
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    
    <header>
        <div class="header-content">
            <h1 class="display-4">LOYD's Portfolio</h1>
            <p class="lead">Explore my Activities</p>
        </div>
        <img src="assets/images/LOGO.png" alt="Logo" class="header-logo">
    </header>

    
    <section class="text-center personal-info">
        <div class="personal-info-container">
            <img src="assets/images/profile.jpg" alt="Profile Picture" width="150" height="150">
            <h2>Jhon Loyd Malabuyo</h2>
            <p>An aspiring Web Developer and Software Engineer—student at PUP Sto. Tomas taking a Bachelor of Science in Information Technology. 20 years old, 3rd Year College Student.</p>
        </div>
    </section>

    
    <div class="parallax-section">
        <div class="parallax-overlay"></div>
        <div class="parallax-content">
            <h2>Journey Through the Stars</h2>
            <p>Explore the infinite beauty of the universe.</p>
        </div>
    </div>

    
    <main class="container mt-5">
        <h2 class="text-center mb-4">Activities</h2>
        <div class="row">
            
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 4.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 4</h5>
                        <a href="Activity 4/Activity 4.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>

            
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 5.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 5</h5>
                        <a href="Activity 5/Activity 5.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>

            
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 6.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 6</h5>
                        <a href="Activity 6/Activity 6.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>

            
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 7.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 7</h5>
                        <a href="Activity 7/Activity 7.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>

            
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 8.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Midterm 1</h5>
                        <a href="Midterm 1/Midterm 1.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>


            div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 8.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Midterm 2</h5>
                        <a href="Midterm 2/Midterm 2.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    
    <footer>
        <p>&copy; 2024 Loyd's Portfolio</p>
    </footer>
</body>
</html>
