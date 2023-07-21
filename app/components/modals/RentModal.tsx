'use client';
import useRentalModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

const RentModal = () => {
    const rentModal = useRentalModal()
    return ( 
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            title="Airbnb your home!"
            actionLabel="Submit"
            onSubmit={rentModal.onClose}
        />
    );
}

export default RentModal;