import cls from "./RatingCard.module.scss";
import { useState } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

type Props = {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
};

export const RatingCard = (props: Props) => {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } =
    props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const isMobile = useDevice();

  const onSelectStars = (selectedStars: number) => {
    setStarsCount(selectedStars);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStars);
    }
  };

  const handleAccept = () => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  };

  const modalContent = (
    <VStack max gap="32">
      <Text text={feedbackTitle} />
      <Input
        placeholder="Ваш отзыв"
        value={feedback}
        onChange={setFeedback}
      />
      <HStack max gap="16" justify="end">
        {!isMobile && (
          <Button onClick={handleCancel} theme={ThemeButton.OUTLINE_RED}>
            Закрыть
          </Button>
        )}
        <Button onClick={handleAccept} fullWidth={isMobile}>
          Отправить
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text text={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={handleCancel}>
          {modalContent}
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy onClose={handleCancel}>
          {modalContent}
        </Modal>
      )}
    </Card>
  );
};
