import styles from "./Navigation.module.css";
function Navigation() {
  console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="./images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
