import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Moments from "./Moments";
import axios from "axios";
import { momentServices } from "../../services/momentServices";

jest.mock("axios");

beforeEach( () => {
    render(
        <Router>
            <Moments/>
        </Router>
    );
})

afterEach( () => {
    axios.get.mockClear();
})

test("get cards with axios, mocking data", async () => {

    const cards = [
        {
            id: 1,
            title: "title",
            description: "description",
            imgUrl: "imgUrl"
        }
    ]

    axios.get.mockResolveValueOnce(cards);

    const api = momentServices();
    const result = await api.get();

    expect(axios.get).toHaveBeenCalledWith(api.BaseUrl);
    expect(result).toEqual(cards);

})