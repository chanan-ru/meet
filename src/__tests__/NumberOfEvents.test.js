import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} updateEvents={() => { }} />);
    });

    //When user hasn’t specified a number, 32 is the default number.
    test('Render 32 events as default', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });


    // User can change the number of events they want to see.
    test('Render text input correctly', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });


    test('change state when number of events change', () => {
        // NumberOfEventsWrapper.setState({
        //     query: 32
        // });
        const eventObject = { target: { value: 32 } };
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });




    // test('renders text input correctly', () => {
    //     const query = NumberOfEventsWrapper.state('query');
    //     expect(NumberOfEventsWrapper.find('.numberOfEvents')).prop('value').toBe(query);
    // });





    // test('change state when the number of events change', () => {
    //     NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', {
    //         target: { value: 12 },
    //     });
    //     expect(NumberOfEventsWrapper.state('query')).toBe(12);
    // });


});