import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('The app is loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('User hasn’t specified a number', () => {
            // This won’t require any code as nothing has happened yet (the user hasn’t specified a number)
        });

        then('A list of 32 events is displayed', () => {
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('A list of events is displayed by default number', () => {
            AppWrapper = mount(<App />);
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });

        when('User specified the number of events', () => {
            AppWrapper.update();
            AppWrapper.find('NumberOfEvents').simulate('change', { target: { value: 2 } });
        });

        then('the specified the number of events are displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });



});