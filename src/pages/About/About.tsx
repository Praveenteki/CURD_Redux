import Header from "../../components/Header/Header";
import styles from "./About.module.scss";

function About() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>About US</h1>
          <p>
            Provision Store is an E-shop website which is a virtual provision
            marketplace where users can buy various types of provision products.
          </p>
        </div>
        <div className={styles.container}>
          <h1>Application Folder Structure</h1>
        </div>
        <div className={styles.container}>
          <p>
            Initially App will start from App.tsx, there we will have Routes
            Components, from there, it will go to Login Route linked to Login
            Component, There we will check for UserName and Password with
            validations, If both are correct, then we generate a barear token
            and navigate to Product list Component There we will have a header
            with Compnay logo on the left side an About Us, logout on the top
            right corner When we click on About Us,It will redirect to About US
            components When we click on Logout, It will redirect to Login Page
          </p>
        </div>
        <div className={styles.container}>
          <h1>Starting the Application</h1>
          <ul style={{ marginLeft: "20px" }}>
            <li>In the project directory, you can run:</li>
            <li>yarn install, to install the necesssary packages</li>
            <li>
              yarn start, Runs the app in the development mode.\ Open
              [http://localhost:3000](http://localhost:3000) to view it in the
              browser. The page will reload if you make edits.\ You will also
              see any lint errors in the console.
            </li>
            <li>
              yarn build, Builds the app for production to the `build` folder.
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes. Your app is ready to be deployed!
              See the section about
              [deployment](https://facebook.github.io/create-react-app/docs/deployment)
              for more information.
            </li>
            <li>
              yarn test, Launches the test runner in the interactive watch
              mode.\ See the section about [running
              tests](https://facebook.github.io/create-react-app/docs/running-tests)
              for more information.
            </li>
            <li>
              yarn eject, **Note: this is a one-way operation. Once you `eject`,
              you can’t go back!** If you aren’t satisfied with the build tool
              and configuration choices, you can `eject` at any time. This
              command will remove the single build dependency from your project.
              Instead, it will copy all the configuration files and the
              transitive dependencies (webpack, Babel, ESLint, etc) right into
              your project so you have full control over them. All of the
              commands except `eject` will still work, but they will point to
              the copied scripts so you can tweak them. At this point you’re on
              your own. You don’t have to ever use `eject`. The curated feature
              set is suitable for small and middle deployments, and you
              shouldn’t feel obligated to use this feature. However we
              understand that this tool wouldn’t be useful if you couldn’t
              customize it when you are ready for it.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
