<style>
    .navbar a {
        position: relative;
        transition: color 0.3s ease;
    }

    .navbar a::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        left: 0;
        bottom: -4px;
        background-color: #D98919;
        transition: width 0.3s ease;
    }

    .navbar a:hover {
        color: #D98919 !important;
    }

    .navbar a:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        .links {
            flex-direction: column !important;
            gap: 10px !important;
            width: 100%;
            align-items: center;
            display: none;
        }

        .actions {
            flex-direction: column !important;
            gap: 10px !important;
            width: 100%;
            align-items: center;
            display: none;
        }

        .menu-toggle {
            display: block !important;
            cursor: pointer;
            font-size: 24px;
            border: none;
            background: none;
            color: #D98919;
        }

        .links.show, .actions.show {
            display: flex !important;
        }
    }
</style>

<nav class="navbar" style="display: flex; justify-content: space-between; align-items: center; padding: 0px 30px; background: transparent; font-family: Poppins, sans-serif; flex-wrap: wrap;">
    
    <!-- Left Section: Logos + App Name -->
    <div style="display: flex; align-items: center;">
        <img src="public/images/national-logo.jpg" alt="Logo 1" style="width: 80px; height: 80px;">
        <img src="public/images/NSF-Logo.jpg" alt="Logo 2" style="width: 120px; height: 60px;">
    </div>

    <!-- Middle Section: Links -->
    <div class="links" style="display: flex; align-items: center; gap: 100px;">
        <a href="#" style="text-decoration: none; color: #333; font-weight: 500; font-size: larger;">Home</a>
        <a href="#" style="text-decoration: none; color: #333; font-weight: 500; font-size: larger;">About</a>
        <a href="#" style="text-decoration: none; color: #333; font-weight: 500; font-size: larger;">Technician</a>
        <a href="#" style="text-decoration: none; color: #333; font-weight: 500; font-size: larger;">Contact</a>
    </div>

    <!-- Right Section: Buttons -->
    <div class="actions" style="display: flex; align-items: center; gap: 15px;">
        <button style="border: 1px solid #D98919; width:120px; background: #D98919; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-family: Poppins, sans-serif; font-size: larger;">
            Login
        </button>
        <button style="border: 1px solid #D98919; width:120px; background: transparent; color: #D98919; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-family: Poppins, sans-serif; font-size: larger;">
            Sign In
        </button>
    </div>

</nav>

<script>
    const toggleBtn = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');
    const actions = document.querySelector('.actions');

    toggleBtn.addEventListener('click', () => {
        links.classList.toggle('show');
        actions.classList.toggle('show');
    });
</script>
