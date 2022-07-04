/* eslint-disable prettier/prettier */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" bgColor="pGray.800">
        <ModalBody>
          <Image src={imgUrl} w="100%" maxH="600px" />
        </ModalBody>
        <ModalFooter justifyContent="flex-start" bgColor="pGray.800">
          <Link href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
