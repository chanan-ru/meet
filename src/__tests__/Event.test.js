import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from "../mock-data";
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];

    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
    });



    test('render correct details', () => {

        const detailButton = EventWrapper.find(".detailButton");
        detailButton.simulate("click");


        // Render Title
        const summary = EventWrapper.find('.summary');
        expect(summary.text()).toBe(event.summary);

        // Render Location
        const eventLocation = EventWrapper.find('.eventLocation');
        expect(eventLocation.text()).toBe(event.location);

        // Render description
        const description = EventWrapper.find('.description');
        expect(description.text()).toBe(event.description);

        // Render Creator
        const creator = EventWrapper.find('.creator');
        expect(creator.text()).toBe(event.creator.email);

        // Render event date
        const eventDate = EventWrapper.find('.eventDate');
        expect(eventDate.text()).toBe(new Date(event.start.dateTime).toString());
    });

    test("render detail button", () => {
        const detailButton = EventWrapper.find('.detailButton');
        detailButton.simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
        expect(detailButton.text()).toBe('Hide details');
    });




});