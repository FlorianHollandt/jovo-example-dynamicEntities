[![Jovo Framework](https://www.jovo.tech/img/github-logo.png)](https://www.jovo.tech)

<p align="center">Example project for using the <a href="https://github.com/jovotech/jovo-framework-nodejs">Jovo Framework</a> ⭐️</p>

<p align="center">
<a href="https://www.jovo.tech/framework/docs/"><strong>Documentation</strong></a> -
<a href="https://github.com/jovotech/jovo-cli"><strong>CLI </strong></a> - <a href="https://github.com/jovotech/jovo-framework-nodejs/blob/master/CONTRIBUTING.md"><strong>Contributing</strong></a> - <a href="https://twitter.com/jovotech"><strong>Twitter</strong></a></p>
<br/>

# Example: Dynamic entities

This example project (based on the 'HelloWorld' template) implements <a href="https://developer.amazon.com/de/docs/custom-skills/use-dynamic-entities-for-customized-interactions.html">dynamic entities</a> by using <a href="https://www.jovo.tech/docs/hooks">hooks</a>, as proposed by Alexa Champion <a href="https://twitter.com/marktucker">Mark Tucker</a> in the <a href="https://community.jovo.tech/t/alexa-dynamic-entity-sample/426">Jovo Community Forum</a>.

To make it work, clone this repo, `cd` into the folder, and then in the terminal do:
```sh
$ npm install
$ jovo build
$ jovo deploy -t info
$ jovo deploy -t model
```

Now to test it, say
> Alexa, open Dynamic Entities!

Alexa will welcome you and ask you for your name, while in the background updating your language model with the dynamic entities from `./src/hooks/dynamicEntitiesHook.js` (using a `Dialog.UpdateDynamicEntities` directive with the `REPLACE` behavior). If you respond with 
> Peter Parker

your utterance will be reolved with the dynamic slot value `Peter Parker`, which the Skill then uses to greet you.

Congrats, if you made it to this point, you successfully used dynamic entity resolution!

For hygiene and best practice reasons, the dynamic entities are cleared when the Skill session ends (via the same hook), using the `CLEAR` behavior of the `Dialog.UpdateDynamicEntities` directive.

