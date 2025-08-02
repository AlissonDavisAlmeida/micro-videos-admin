import { Category, CategoryConstructorProps } from "../category.entity"

describe("Category unit tests", () => {
    test("constructor of Category", () => {

        const arrange: Pick<CategoryConstructorProps, 'name'> = {
            name: "Movie",
        }

        let category = new Category(arrange)

        expect(category.category_id).toBeUndefined()
        expect(category.name).toBe("Movie")
        expect(category.description).toBeNull()
        expect(category.is_active).toBe(true)
        expect(category.created_at).toBeInstanceOf(Date)


        const created_at = new Date("2020-01-01T00:00:00Z")

        const arrange2: CategoryConstructorProps = {
            ...arrange,
            category_id: "123",
            description: "some description",
            is_active: false,
            created_at
        }

        category = new Category(arrange2)

        expect(category.category_id).toBe(arrange2.category_id)
        expect(category.name).toBe(arrange2.name)
        expect(category.description).toBe(arrange2.description)
        expect(category.is_active).toBe(arrange2.is_active)
        expect(category.created_at).toBe(arrange2.created_at)
    })
})