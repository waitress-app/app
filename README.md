# Waitress

[Live app](https://waitress.netlify.com) - [Storybook](https://waitress-storybook.netlify.com)

[Flaticon](https://www.flaticon.com) - Icons made by:
[photo3idea-studio](https://www.flaticon.com/authors/photo3idea-studio),
[smashicons](https://www.flaticon.com/authors/smashicons), 
[itim2101](https://www.flaticon.com/authors/itim2101), 
[freepik](https://www.flaticon.com/authors/freepik), 
[those-icons](https://www.flaticon.com/authors/those-icons)

# How to 
<details>
  <summary>App setup</summary>
  
  ## Install dependencies
  Yarn knowledge is required for running this project [getting started with yarn](https://yarnpkg.com/getting-started)
  ```
  yarn install
  ```
  
  ## Run

  ### Compiles and hot-reloads for development
  You can look at [localhost:8080](http://localhost:8080) to see the app
  ```
  yarn serve
  ```
  
  ## Build
  
  ### Compiles and minifies for production
  A folder will be created in root path named `dist`
  ```
  yarn run build
  ```
  
  ## Test
  
  ### Run your end to end tests
  For this test im using [cypress](https://www.cypress.io)
  ```
  yarn test:e2e
  ```
  
  ### Run your unit tests
  For this test im using [jest](https://jestjs.io)
  ```
  yarn test:unit --watch (optional)
  ```
  
  ## Linter
  
  ### Lints and fixes files
  ```
  yarn lint
  ```
</details>

<details>
  <summary>Storybook setup</summary>
  
  ## Install dependencies
  Yarn knowledge is required for running this project [getting started with yarn](https://yarnpkg.com/getting-started)
  ```
  yarn install
  ```
  
  ## Run

  #### Compiles and hot-reloads for development
  You can look at [localhost:6006](http://localhost:6006) to see the storybook
  ```
  yarn storybook
  ```
  
  ## Build
  
  ### Compiles and minifies for production
  A folder will be created in root path named `storybook-static`
  ```
  yarn build-storybook
  ```
  
  ## Linter
  
  ### Lints and fixes files
  ```
  yarn lint
  ```
</details>
