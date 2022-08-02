import { fireEvent, render, screen } from '@testing-library/react';
import Router from '../../application/Router';
import MomentFormPage from '../../pages/MomentFormPage';
import MomentForm from './MomentForm';


test('should get an image name', async () => {

    render(<MomentFormPage />, {wrapper: Router} )

    const inputName = screen.getByPlaceholderText(/Moment title/i);
    const inputDescription = screen.getByLabelText(/description/i);
    const inputImgUrl = screen.getByLabelText(/imgUrl/i);
    const button = screen.getByRole("button", {name: /cancel/i})
    
    fireEvent.change(inputName, {target:{value: "title"}});
    fireEvent.change(inputDescription, {target:{value: "description"}});
    fireEvent.change(inputImgUrl, {target:{value: "image"}});
    fireEvent.click(button);
    
    const imgName = await screen.findByText(/title/i)
    expect(imgName).toBeInTheDocument();
    //screen.debug();
}); 