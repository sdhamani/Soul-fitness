import "./components.css";
export default function Nav() {
  return (
    <nav class="navigation nav-ecom">
      <div class="container" id="ham-container" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <ul class="list-no-bullets nav-pills">
        <li class="list-item-inline">
          <a class="link " href="/">
            Home
          </a>
        </li>
        <li class="list-item-inline">
          <a class="link link-active" href="/components.html">
            Wishlist
          </a>
        </li>
        <li class="list-item-inline">
          <a class="link link-active" href="/components.html">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}
