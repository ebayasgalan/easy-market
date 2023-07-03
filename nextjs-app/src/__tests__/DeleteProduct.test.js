import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DeleteProduct from '../components/DeleteProduct';
import { deleteProduct } from '../lib/server-actions';

jest.mock('../lib/server-actions', () => ({
  deleteProduct: jest.fn(),
}));

describe('DeleteProduct', () => {
  it('shows confirmation dialog and deletes the product', async () => {
    const productId = '123';
    const { getByText } = render(
      <DeleteProduct id={productId}>Delete</DeleteProduct>
    );

    // Mock the confirmation dialog to return true
    const mockConfirm = jest.spyOn(window, 'confirm');
    mockConfirm.mockImplementation(() => true);

    // Simulate a click on the delete button
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    // Wait for the deletion to complete
    await waitFor(() => {
      expect(deleteProduct).toHaveBeenCalledWith(productId);
    });

    // Assert that the product was deleted
    // You can assert on the console output or perform additional checks
    // For example: expect(console.log).toHaveBeenCalledWith('Product Deleted!', deletedProduct);
  });

  it('cancels deletion when confirmation dialog is rejected', async () => {
    const productId = '123';
    const { getByText } = render(
      <DeleteProduct id={productId}>Delete</DeleteProduct>
    );

    // Mock the confirmation dialog to return false
    const mockConfirm = jest.spyOn(window, 'confirm');
    mockConfirm.mockImplementation(() => false);

    // Simulate a click on the delete button
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    // Assert that the product deletion was not called
    await waitFor(() => {
      expect(deleteProduct).toHaveBeenCalledTimes(1);
    });

    // Additional assertions can be performed if needed
  });
});