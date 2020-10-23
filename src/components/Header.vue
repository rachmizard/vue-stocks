<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trader</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link to="/" activeClass="active" tag="li">
                <a class="nav-link" href="#">Home</a>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/stocks" activeClass="active" tag="li">
                <a class="nav-link" href="#">Stocks</a>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/portofolio" activeClass="active" tag="li">
                <a class="nav-link" href="#">Portofolio</a>
            </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
