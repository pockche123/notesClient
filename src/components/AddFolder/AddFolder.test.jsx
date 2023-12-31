import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import AddFolder from '.'

describe('Sidebar', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <AddFolder />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {

        expect(AddFolder).toBeDefined()

    })

})
