package org.softwire.training.api.integration;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.softwire.training.api.integration.helper.AdminLoginHelper;
import org.softwire.training.api.integration.helper.LoginHelper;
import org.softwire.training.api.integration.helper.WebDriverHelper;

import static org.junit.jupiter.api.Assertions.*;

//tests if when a user logs in as admin, they can access all of the correct pages

public class AdminNavBarIT {
    public static final String TARGET_ADDRESS = System.getProperty("target.address");

    private static WebDriver driver;

    @BeforeAll
    public static void setUp() {
        driver = WebDriverHelper.getSharedDriver();
    }

    @Test
    public void testIsAdminLinksArePresent() {
        driver.get(TARGET_ADDRESS);
        AdminLoginHelper.ensureLoggedIn(driver);
        AdminLoginHelper.login(driver);

        WebElement navBar = driver.findElement(By.className("navbar"));
        assertTrue(navBar.getText().contains("Admin") && navBar.getText().contains("Search"));
    }

    @Test
    public void testAdminDropdownIsPresent() {
        driver.get(TARGET_ADDRESS);
        AdminLoginHelper.ensureLoggedIn(driver);
        AdminLoginHelper.login(driver);


    }

    @Test
    public void testSearchDropdownIsPresent() {
        driver.get(TARGET_ADDRESS);
        AdminLoginHelper.ensureLoggedIn(driver);
        AdminLoginHelper.login(driver);


    }
}
