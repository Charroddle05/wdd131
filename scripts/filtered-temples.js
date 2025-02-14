body {
    font-family: "Your Google Font", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #333;
    font-size: 20px;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    display: none; /* Ocultar por padrão em visualizações móveis */
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    margin: 5px 0;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
  }
  
  nav a:hover {
    color: #f8918a;
    text-decoration: none;
  }
  
  #hamburger {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
  
  .grid {
    display: grid;
  }
  
  main {
    padding: 20px;
  }
  
  figure {
    margin: 10px 0;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  
    clear: both;
    position: relative;
    height: 200px;
    margin-top: 5vh;
  }
  
  .temple-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .temple-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .temple-container {
    display: flex;
    flex-direction: column;
  }