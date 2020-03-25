<p align="center">
  <a href="https://waitress.netlify.com">
    <img alt="Coc Logo" src="https://user-images.githubusercontent.com/9284273/77502892-f1140100-6e3a-11ea-8179-32a66a8de7ed.png" height="160" />
  </a>
</p>
<p align="center">
  <a href='https://github.com/Renato66/waitress/actions?query=workflow%3A"Build+test"'>
    <img alt="Build test" src="https://github.com/Renato66/waitress/workflows/Build%20test/badge.svg" />
  </a>
   <a href='https://github.com/Renato66/waitress/actions?query=workflow%3A"Unit+test"'>
    <img alt="Unit test" src="https://github.com/Renato66/waitress/workflows/Unit%20test/badge.svg" />
  </a>
   <a href='https://github.com/Renato66/waitress/actions?query=workflow%3A"E2E+test"'>
    <img alt="E2E test" src="https://github.com/Renato66/waitress/workflows/E2E%20test/badge.svg" />
  </a>
</p>

<p align="center">
  <a href="https://waitress.netlify.com">
    live app
  </a>
  -
  <a href="https://waitress-storybook.netlify.com">
    storybook
  </a>
</p>

Waitress is an app made for restaurantes to make life easier for magangers, waiters, cooks and clients

 - Managers can see graphics, about their clients and incomes.
 - Waiters can manage tables singin their costumers, take orders, generate the bills and splits and see their tips inside the app.
 - Cooks can see their next orders.
 - Clients can check in, call for waiter, see an digital version of your menu.

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

[Flaticon](https://www.flaticon.com) - Icons made by:
[photo3idea-studio](https://www.flaticon.com/authors/photo3idea-studio),
[smashicons](https://www.flaticon.com/authors/smashicons), 
[itim2101](https://www.flaticon.com/authors/itim2101), 
[freepik](https://www.flaticon.com/authors/freepik), 
[those-icons](https://www.flaticon.com/authors/those-icons)
