# Rakuten React kit

The starter kit for react applications from Rakuten.

## Install

1. `npm install -g webpack`
1. `npm install -g webpack-dev-server`
1. `npm install`

**Run server with HMR (Hot Module Replacement)**

1. `npm run hot`
1. Do some changes.
1. Your changes will be applied to your running app **without losing the state of your app**.

**Be careful**

This is an experimental project. Use it in production with caution.

## Structure

All source-code can be found at `src/` folder.

```

/ (root)
|--- build/          (outputs)
|--- src/            (source-code)
|------ components/  (application components)     
|--- domain/         (business logic)
|------ middleware/  (actors who dispatch actions)        
|------ store/       (the store)
|---------- actions/ (application actions)
|---------- reduce/  (store reducers)
|---------- state/   (store states)
|--- style/          (style sheets)

```

## License

Copyright (c) 2016 Rakuten, Inc. Licensed under the MIT License.
