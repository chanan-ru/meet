import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {


        given('The app is loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the list of events has been displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('event’s details are invisible for the user', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .hidden_detail')).toHaveLength(0);
        });
    });


    test('User can expand an event to see its details', ({ given, when, then }) => {

        given('The list of events is loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        when('User click on the “Show details” button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailButton').at(0).simulate('click');
        });

        then('The user should be able to see the full event’s details', () => {
            expect(AppWrapper.find('.event .hidden_detail')).toHaveLength(1);
        });
    });


    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('The full event’s details are displayed to user', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .hidden_detail')).toHaveLength(1);
        });

        when('User click on the “Hide details” button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailButton').at(0).simulate('click');
        });

        then('The full event’s details are hidden', () => {
            expect(AppWrapper.find('.event .hidden_detail')).toHaveLength(0);
        });
    });
});