import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { $api } from "shared/api/api";

const profile: Profile = {
  id: "1",
  first: "admin",
  lastname: "admin",
  age: 18,
  currency: Currency.EUR,
  city: "Moscow",
  country: Country.RUSSIA,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: "1",
        username: "admin",
      },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", () => {
  test("Режим онли должен переключиться", async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test("При отмене значения должны обнуляться", async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.FirstName"));
    await userEvent.clear(screen.getByTestId("ProfileCard.LastName"));

    await userEvent.type(screen.getByTestId("ProfileCard.FirstName"), "name");
    await userEvent.type(
      screen.getByTestId("ProfileCard.LastName"),
      "lastname"
    );

    expect(screen.getByTestId("ProfileCard.FirstName")).toHaveValue("name");
    expect(screen.getByTestId("ProfileCard.LastName")).toHaveValue("lastname");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    expect(screen.getByTestId("ProfileCard.FirstName")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.LastName")).toHaveValue("admin");
  });

  test("Должна появляться ошибка", async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.FirstName"));
    await userEvent.clear(screen.getByTestId("ProfileCard.LastName"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument();
  });

  test("Если ошибок нет, то должен сработать запрос на сервер", async () => {
    const mockPutRequest = jest.spyOn($api, "put")
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.FirstName"));
    await userEvent.clear(screen.getByTestId("ProfileCard.LastName"));

    await userEvent.type(screen.getByTestId("ProfileCard.FirstName"), "name");
    await userEvent.type(
      screen.getByTestId("ProfileCard.LastName"),
      "lastname"
    );

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
