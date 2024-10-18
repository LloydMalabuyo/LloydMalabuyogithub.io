<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOYD's Portfolio</title>
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
            padding: 80px 0;
        }

        .activity-card {
            background-size: cover;
            background-position: center;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            color: white;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .activity-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .card-body {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 15px;
        }

        footer {
            background-color: #007bff;
            color: white;
            padding: 20px 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .text-center {
            text-align: center;
        }

        .mt-5 {
            margin-top: 3rem;
        }

        .mb-4 {
            margin-bottom: 1.5rem;
        }
        
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .col-md-4 {
            flex: 0 0 31%;
            max-width: 31%;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            .col-md-4 {
                flex: 0 0 48%;
                max-width: 48%;
            }
        }

        @media (max-width: 576px) {
            .col-md-4 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1 class="text-center">LOYD's Portfolio</h1>
        <p class="text-center">Explore my Activities</p>
    </header>
    
    <main class="container mt-5">
        <h2 class="text-center mb-4">Activities</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 4.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 4</h5>
                        <a href="Activity 4/Activity4.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 5.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 5</h5>
                        <a href="Activity 5/index.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 6.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 6</h5>
                        <a href="Activity 6/index.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 7.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 7</h5>
                        <a href="Activity 7/Activity7.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 8.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 8</h5>
                        <a href="Activity 8/Activity8.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card activity-card" style="background-image: url('assets/images/Activity 9.jpg');">
                    <div class="card-body">
                        <h5 class="card-title">Activity 9</h5>
                        <a href="Activity 9/Activity9.html" class="btn btn-light">View Activity</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="text-center mt-5 p-4">
        <p>&copy; 2024 LOYD's Portfolio. All rights reserved.</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
