'use strict';

const hook = (error, host, jovo) => {
  if (jovo.isAlexaSkill()) {
    if (jovo.isLaunchRequest()) {
    // if (jovo.isNewSession()) {
      jovo.$alexaSkill.addDirective({
        type: 'Dialog.UpdateDynamicEntities',
        updateBehavior: 'REPLACE',
        types: [
          {
            name: 'PERSON_NAME_TYPE',
            values: [
              {
                name: {
                  value: 'Peter Parker',
                },
              },
              {
                name: {
                  value: 'Clark Kent',
                },
              },
              {
                name: {
                  value: 'Bruce Wayne',
                },
              },
            ],
          },
        ],
      });

      return;
    }

    if (
      jovo.getMappedIntentName() === 'END'
      || jovo.$response.hasSessionEnded()
    ) {
      jovo.$alexaSkill.addDirective({
        type: 'Dialog.UpdateDynamicEntities',
        updateBehavior: 'CLEAR',
      });
    }
  }
};

module.exports = hook;
